import { Inject, Service } from "typedi";
import WorkspaceValidator from "../../validators/Workspace.validator";
import {WorkspaceEntity} from "../../entities/Workspace.entity";


@Service()
export default class WorkspaceService {
  @Inject(() => WorkspaceValidator)
  workspaceValidator: WorkspaceValidator;

}
