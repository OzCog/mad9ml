import { TaskMessage } from '../../types/messages.js';

export interface MemoryItem {
  id: string | number;
  type: string;
  content: unknown;
  metadata?: Record<string, unknown>;
}

export interface MemoryQuery {
  type: string;
  term: string;
  filters?: Record<string, unknown>;
}

export interface MemoryResponse<T extends MemoryItem = MemoryItem> {
  items: T[];
  metadata?: Record<string, unknown>;
}

export interface MemoryConfig {
  capacity?: number;
  persistence?: boolean;
  indexing?: string[];
}

export interface MemorySubsystem {
  query(query: MemoryQuery): Promise<MemoryResponse>;
  store(item: MemoryItem): Promise<void>;
  update(id: string | number, updates: Partial<MemoryItem>): Promise<void>;
  delete(id: string | number): Promise<void>;
}