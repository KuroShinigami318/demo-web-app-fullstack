import {MigrationInterface, QueryRunner} from "typeorm";

export class updateDatabase1633093910883 implements MigrationInterface {
    name = 'updateDatabase1633093910883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_draft\`.\`chitietsp\` DROP FOREIGN KEY \`chitietsp_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`phone_draft\`.\`chitietsp\` DROP FOREIGN KEY \`chitietsp_ibfk_2\``);
        await queryRunner.query(`DROP INDEX \`maDM\` ON \`phone_draft\`.\`chitietsp\``);
        await queryRunner.query(`DROP INDEX \`maSP\` ON \`phone_draft\`.\`chitietsp\``);
        await queryRunner.query(`ALTER TABLE \`phone_draft\`.\`chitietsp\` ADD UNIQUE INDEX \`IDX_668fbee465a799a0c6974113d5\` (\`maSP\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_668fbee465a799a0c6974113d5\` ON \`phone_draft\`.\`chitietsp\` (\`maSP\`)`);
        await queryRunner.query(`ALTER TABLE \`phone_draft\`.\`chitietsp\` ADD CONSTRAINT \`FK_668fbee465a799a0c6974113d54\` FOREIGN KEY (\`maSP\`) REFERENCES \`phone_draft\`.\`sanpham\`(\`maSP\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`phone_draft\`.\`chitietsp\` DROP FOREIGN KEY \`FK_668fbee465a799a0c6974113d54\``);
        await queryRunner.query(`DROP INDEX \`REL_668fbee465a799a0c6974113d5\` ON \`phone_draft\`.\`chitietsp\``);
        await queryRunner.query(`ALTER TABLE \`phone_draft\`.\`chitietsp\` DROP INDEX \`IDX_668fbee465a799a0c6974113d5\``);
        await queryRunner.query(`CREATE INDEX \`maSP\` ON \`phone_draft\`.\`chitietsp\` (\`maSP\`)`);
        await queryRunner.query(`CREATE INDEX \`maDM\` ON \`phone_draft\`.\`chitietsp\` (\`maDM\`)`);
        await queryRunner.query(`ALTER TABLE \`phone_draft\`.\`chitietsp\` ADD CONSTRAINT \`chitietsp_ibfk_2\` FOREIGN KEY (\`maDM\`) REFERENCES \`phone_draft\`.\`danhmuc\`(\`maDM\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`phone_draft\`.\`chitietsp\` ADD CONSTRAINT \`chitietsp_ibfk_1\` FOREIGN KEY (\`maSP\`) REFERENCES \`phone_draft\`.\`sanpham\`(\`maSP\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
