import { MigrationInterface, QueryRunner } from 'typeorm';

export class CheckAndAddEnum1747234127292 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
DO $$
            BEGIN
                -- Kiểm tra và tạo kiểu enum cho users_role
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'users_role_enum') THEN
                    CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'customer', 'staff');
                END IF;

                -- Kiểm tra và tạo kiểu enum cho orders_status
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'orders_status_enum') THEN
                    CREATE TYPE "public"."orders_status_enum" AS ENUM('pending', 'processing', 'canceled', 'shipped', 'delivered'); 
                END IF;

                -- Kiểm tra và tạo kiểu enum cho products_status
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'products_status_enum') THEN
                    CREATE TYPE "public"."products_status_enum" AS ENUM('active', 'draft', 'discontinued');
                END IF;

                -- Kiểm tra và tạo kiểu enum cho categories_status
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'categories_status_enum') THEN
                    CREATE TYPE "public"."categories_status_enum" AS ENUM('active', 'inactive');
                END IF;

                -- Kiểm tra và tạo kiểu enum cho brands_status
                IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'brands_status_enum') THEN
                    CREATE TYPE "public"."brands_status_enum" AS ENUM('active', 'inactive');
                END IF;
            END
            $$;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TYPE IF EXISTS public.users_role_enum;
            DROP TYPE IF EXISTS public.orders_status_enum;
            DROP TYPE IF EXISTS public.products_status_enum;
            DROP TYPE IF EXISTS public.categories_status_enum;
            DROP TYPE IF EXISTS public.brands_status_enum;
        `);
  }
}
