/* Line 2 - 7 in this file, just for reference */
CREATE DATABASE palet;


/* TABLE WILL CONSIST OF THE FOLLOWING:

TABLE NAME: 'POSTS'
-id
-name of the artist
-process/description of how to make the art stuff
-materials to make artwork --> this will link to another table 
-URL link to artist's page
-URL link to image source

TABLE NAME: MATERIALS
-id 
-name of the material
-type of material (e.g. paint)
-link to purchase the material

*/


CREATE TABLE post (
  post_id SERIAL PRIMARY KEY,
  user_id INTEGER,
  process VARCHAR(255),
  artist_page VARCHAR(255),
  image_src VARCHAR(255)
);

CREATE TABLE user (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  artist_page VARCHAR(255)
);

CREATE TABLE material (
  material_id SERIAL PRIMARY KEY,
  post_id INTEGER,
  name VARCHAR(255),
  type VARCHAR(255), 
  purchase_link VARCHAR(255) 
);