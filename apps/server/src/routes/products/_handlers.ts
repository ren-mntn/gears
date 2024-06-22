import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { JSONSchema } from 'json-schema-to-ts';

export default async function (fastify: FastifyInstance) {
  /*
   * GET /products
   */
  /* eslint-disable-next-line functional/no-expression-statements */
  fastify.get(
    '/',
    {
      schema: schemas['get']
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return reply.code(200).send({ success: true });
    }
  );
}

const schemas = {
  /*
   * GET /products
   */
  get: {
    response: {
      200: {
        type: 'object',
        properties: {
          products: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                productId: { type: 'string' },
                productName: { type: 'string' },
                price: { type: 'number' },
                imageName: { type: 'string' },
                asin: { type: 'string' },
                openSize: {
                  type: 'object',
                  properties: {
                    openDepth: { type: 'number' },
                    openHeight: { type: 'number' },
                    openWidth: { type: 'number' }
                  }
                },
                storageSize: {
                  type: 'object',
                  properties: {
                    storageDepth: { type: 'number' },
                    storageHeight: { type: 'number' },
                    storageWidth: { type: 'number' }
                  }
                },
                weight: { type: 'number' },
                favoriteCount: { type: 'number' },
                viewCount: { type: 'number' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
                brandName: { type: 'string' },
                categoryName: { type: 'string' },
                subCategoryName: { type: 'string' },
                productTags: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      productTagName: { type: 'string' }
                    }
                  }
                },
                colorTags: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      colorTagName: { type: 'string' }
                    }
                  }
                },
                productAttributes: {
                  type: 'object',
                  properties: {
                    capacity: { type: 'number' },
                    inner_tent: { type: 'string' },
                    grand_sheet: { type: 'string' },
                    fabrics: { type: 'string' }
                  }
                },
                layouts: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      layoutId: { type: 'number' },
                      favoriteCount: { type: 'number' },
                      viewCount: { type: 'number' }
                    }
                  }
                }
              }
            }
          }
        }
      } as const satisfies JSONSchema,
      500: {
        type: 'object',
        properties: {
          error: { type: 'string' }
        }
      } as const satisfies JSONSchema
    }
  }
};
