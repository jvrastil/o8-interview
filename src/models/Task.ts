import { TaskStatus } from '@/models/TaskStatus';

export class Task {
  id?: number;
  label?: string;
  status?: TaskStatus;

  constructor(model?: any) {
    if (model) {
      this.id = model.id;
      this.label = model.label;
      this.status = model.status;
    }
  }
}
