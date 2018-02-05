Tacos = new Mongo.Collection( 'tacos' );

Tacos.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Tacos.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});