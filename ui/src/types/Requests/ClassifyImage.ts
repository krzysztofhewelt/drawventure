export interface ClassifyImageRequest {
  image: Blob;
  taskId: string;
  time: string;
  // userId: string; // future: to add
  label: string; // future: to delete
  type: string; // future: to delete
}

export interface ClassifyImageResponse {
  accuracy: number;
  score: number;
}
