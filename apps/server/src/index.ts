/* eslint-disable functional/no-return-void, functional/no-expression-statements */
import fs from 'fs';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastify from 'fastify';
import fastifyAutoLoad from '@/utils/fastifyAutoLoad';

const PORT = 8080;
const HOST = '0.0.0.0';

const server = fastify();

// サーバーの初期化と設定を行う非同期関数
const init = async ({ host, port }: { host: string; port: number }) => {
  // Swagger OpenAPI ドキュメントの設定
  await server.register(fastifySwagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'test fastify swagger',
        description: 'testing fastify swagger',
        version: '0.0.0'
      }
    }
  });

  // Swagger UI の設定
  await server.register(fastifySwaggerUi, {
    routePrefix: '/docs'
  });

  // カスタムの自動ルートローディングプラグインの登録
  await server.register(fastifyAutoLoad);

  // サーバーの準備完了を待ち、Swagger を初期化
  await server.ready();
  server.swagger();

  // OpenAPI ドキュメントを YAML 形式で取得し、ファイルに保存
  const responseYaml = await server.inject('/docs/yaml');
  if (responseYaml.statusCode !== 200) {
    console.error(JSON.parse(responseYaml.payload).message);
    process.exit(1);
  }
  fs.writeFileSync('docs/openapi.yaml', responseYaml.payload);

  // サーバーを指定のホストとポートで起動
  server.listen({ host, port }, (err: Error | null, address: string) => {
    if (err != null) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

init({ host: HOST, port: PORT });
