import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Simulator } from '@biosimulations/simulators/api-models';
import { Model } from 'mongoose';
import { Logger } from '@nestjs/common';
@Injectable()
export class SimulatorsService {
  constructor(
    @InjectModel(Simulator.name) private simulator: Model<Simulator>
  ) {}

  async findAll(): Promise<Simulator[]> {
    const results = await this.simulator
      .find({}, { _id: 0, __v: 0 })
      .lean()
      .exec();
    // TODO remove the cast, and change return type to simulaor interface
    //results.forEach((value) => value.toJSON());
    return results as Simulator[];
  }
  async findAllLatest() {
    const all = this.simulator.find({}, { _id: 0, __v: 0 }).lean();
  }
  async findById(id: string) {
    return this.simulator.find({ id: id }, { _id: 0, __v: 0 }).lean();
  }
  async findByVersion(id: string, version: string): Promise<Simulator | null> {
    return this.simulator
      .findOne({ id: id, version: version }, { _id: 0, __v: 0 })
      .exec();
  }
  async new(doc: Simulator): Promise<Simulator[]> {
    const sim = new this.simulator(doc);
    let res: Simulator[];
    try {
      res = (await sim.save()).toJSON({ versionKey: false });
    } catch (e) {
      if (e.name == 'MongoError' && e.code == 11000) {
        console.log(e);
        throw new ConflictException(
          'Key Conflict',
          `Simulator with id: ${e?.keyValue?.id}, version: ${e?.keyValue?.version} already exists`
        );
      } else {
        console.log(e);
        throw new ConflictException('Conflict', 'Database Error');
      }
    }
    return res;
  }
}
