export type Model = {
  id: string;
  name: string;
  type: ModelTypes;
  description: string;
  source: {
    type: 'speckle' | 'speckle_branches' | '3dtiles' | 'file';
    speckle?: SpeckleObject;

    url?: string;
  };
  period?: Periods;
};

export type Periods = 'before' | 'shelter' | 'aftermath' | 'occupation';

export type ModelTypes =
  | 'elements'
  | 'pointcloud'
  | 'models_sets'
  | 'buildings'
  | 'trees'
  | 'terrain';

export type ViewOption = 'overview' | 'structural' | 'spaces';
export type Mode = {
  id: ViewOption;
  name: string;
  description: string;
  default_models: string[];
  background_models?: string[];
  camera?: any;
};

export type SpeckleObject =
  | {
      server: string;
      streamId: string;
      branchName?: string;
      objectId?: string;
    }
  | undefined;
