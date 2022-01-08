import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDb1641670662536 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE user (
            id int NOT NULL AUTO_INCREMENT,
            email varchar(100) DEFAULT NULL,
            password varchar(100) DEFAULT NULL,
            PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE user');
  }
}
