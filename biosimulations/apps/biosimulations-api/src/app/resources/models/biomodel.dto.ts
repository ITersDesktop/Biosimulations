import { ApiProperty, ApiExtraModels, OmitType } from '@nestjs/swagger';

import { ResourceType } from '@biosimulations/datamodel/core';
import {
  BiomodelAttributesDTO,
  CreateBiomodelAttributesDTO,
} from '@biosimulations/datamodel/api';

class UserAPIIdentifier {
  @ApiProperty({ enum: ['user'] })
  type!: 'user';
  @ApiProperty()
  id!: string;
}

class FileAPIIdentifier {
  @ApiProperty({ enum: ['file'] })
  type!: 'file';
  @ApiProperty()
  id!: string;
}
class ModelAPIIdentifier {
  @ApiProperty({ enum: ['model'] })
  type!: 'model';
  @ApiProperty()
  id!: string;
}
class DataWithUserIdentifier {
  @ApiProperty()
  data!: UserAPIIdentifier;
}
class DataWithFileIdentifier {
  @ApiProperty()
  data!: FileAPIIdentifier;
}

class DataWithModelIdentifier {
  @ApiProperty()
  data!: ModelAPIIdentifier;
}
export class CreateBiomodelRelationship {
  @ApiProperty()
  owner!: DataWithUserIdentifier;
  @ApiProperty()
  file!: DataWithFileIdentifier;
  @ApiProperty()
  image!: DataWithFileIdentifier;
  @ApiProperty()
  parent!: DataWithModelIdentifier;
}

export class CreateBiomodelResource {
  @ApiProperty({ enum: ['model'] })
  type!: ResourceType.model;
  @ApiProperty()
  id!: string;
  @ApiProperty()
  attributes!: CreateBiomodelAttributesDTO;
  @ApiProperty()
  relationships!: CreateBiomodelRelationship;
}

export class CreateBiomodelDTO {
  @ApiProperty()
  data!: CreateBiomodelResource;
}