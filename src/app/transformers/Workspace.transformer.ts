import { Service } from "typedi";
import {WorkspaceEntity} from "../entities/Workspace.entity";

@Service()
export default class WorkspaceTransformer {
  public transform = (workspace: WorkspaceEntity) => {
    return {
      name: workspace.name,
      code: workspace.code
    };
  };

  public transformForEvent = (workspace: WorkspaceEntity) => {
    return {
      name: workspace.name,
      code: workspace.code
    };
  };
}
