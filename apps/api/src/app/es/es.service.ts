import { Client } from '@elastic/elasticsearch';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EsService {
  client = new Client({
    node: 'http://localhost:9200',
  });

  async deleteHeroIndex(indexName: string) {
    try {
      const response = await this.client.indices.delete({
        index: indexName,
      });
      if (response.acknowledged) {
        console.log(`Index ${indexName} deleted successfully.`);
      } else {
        console.error(`Failed to delete index ${indexName}.`);
      }
    } catch (error) {
      console.error(`Error deleting index ${indexName}:`, error);
    }
  }

  async createHeroIndex(indexName: string) {
    try {
      const exists = await this.client.indices.exists({ index: indexName });
      if (!exists) {
        await this.client.indices.create({
          index: indexName,
        });
        console.log(`Index '${indexName}' created successfully.`);
      } else {
        console.log(`Index '${indexName}' already exists.`);
      }
    } catch (err) {
      console.error('Error creating index:', err);
    }
  }
}
