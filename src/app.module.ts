import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

import * as ormconfig from './config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      host: ormconfig.host,
      type: ormconfig.type,
      port: ormconfig.port,
      username: ormconfig.username,
      password: ormconfig.password,
      database: ormconfig.database,
      synchronize: ormconfig.synchronize,
      entities: [User],
    } as TypeOrmModuleOptions),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
