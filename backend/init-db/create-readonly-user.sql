CREATE USER readonly_user WITH PASSWORD 'readonly_password';

GRANT CONNECT ON DATABASE my_portfolio_db TO readonly_user;

\c my_portfolio_db

GRANT USAGE ON SCHEMA public TO readonly_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_user;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO readonly_user;