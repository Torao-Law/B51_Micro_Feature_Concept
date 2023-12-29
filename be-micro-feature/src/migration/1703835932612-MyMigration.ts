import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703835932612 implements MigrationInterface {
    name = 'MyMigration1703835932612'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" ADD "image" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" DROP COLUMN "image"`);
    }

}
