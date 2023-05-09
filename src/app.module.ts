import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/interfaces/user.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateTableUser1683599867947 } from './migration/1683599867947-create_table_user';
import { CreateTableAdress1683602548748 } from './migration/1683602548748-create_table_adress';
import { CreateTableCity1683602537213 } from './migration/1683602537213-create_table_city';
import { CreateTableState1683602524901 } from './migration/1683602524901-create_table_state';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [UserEntity],
      migrations: [
        CreateTableUser1683599867947,
        CreateTableAdress1683602548748,
        CreateTableCity1683602537213,
        CreateTableState1683602524901,
      ],
      migrationsRun: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
