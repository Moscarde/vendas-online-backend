import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateTableUser1683599867947 } from './migration/1683599867947-create_table_user';
import { CreateTableAdress1683602548748 } from './migration/1683602548748-create_table_adress';
import { CreateTableCity1683602537213 } from './migration/1683602537213-create_table_city';
import { CreateTableState1683602524901 } from './migration/1683602524901-create_table_state';
import { AlterTableState1683671167956 } from './migration/1683671167956-alter-table-state';
import { InsertInState1683671260467 } from './migration/1683671260467-insert-in-state';
import { InsertInnCity1683683289798 } from './migration/1683683289798-insert-inn-city';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { StateEntity } from './state/entities/state.entity';
import { CityEntity } from './city/entities/city.entity';
import { CacheModule } from './cache/cache.module';
import { AddressEntity } from './address/entities/address.entity';

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
      entities: [UserEntity, StateEntity, CityEntity, AddressEntity],
      migrations: [
        CreateTableUser1683599867947,
        CreateTableAdress1683602548748,
        CreateTableCity1683602537213,
        CreateTableState1683602524901,
        AlterTableState1683671167956,
        InsertInState1683671260467,
        InsertInnCity1683683289798,
      ],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
