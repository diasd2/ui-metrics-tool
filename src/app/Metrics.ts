export class Metrics {
  id: string;
  label: string;
  value: number;
  type: string;
  description: string;
  category: string;

  constructor(id: string, label: string, value: number, type: string, description: string, category: string) {
    this.id = id;
    this.label = label;
    this.value = value;
    this.type = type;
    this.description = description;
    this.category = category;
  }
}
