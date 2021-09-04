CREATE TABLE addresses (
  id INTEGER IDENTITY PRIMARY KEY,
  zip_code VARCHAR(30),
  public_place VARCHAR(30),
  complement VARCHAR(30),
  district VARCHAR(30),
  location VARCHAR(30),
  federative_Unit VARCHAR(30)
);