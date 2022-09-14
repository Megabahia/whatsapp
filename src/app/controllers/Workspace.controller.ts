import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import WorkspaceTransformer from "../transformers/Workspace.transformer";
import WorkspaceService from "../services/workspace/Workspace.service";
import {WorkspaceEntity} from "../entities/Workspace.entity";

@Service()
export default class WorkspaceController {
  @Inject(() => WorkspaceService)
  workspaceService: WorkspaceService;
  @Inject(() => WorkspaceTransformer)
  taskQueueTransformer: WorkspaceTransformer;


}
