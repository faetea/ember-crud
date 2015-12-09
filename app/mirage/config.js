export default function() {

  this.get('/api/pokemon');
  this.get('/api/pokemon/:id');
  this.post('/api/pokemon');
  this.put('/api/pokemon/:id');
  this.del('/api/pokemon/:id');

  this.get('/api/items');
  this.get('/api/items/:id');
  this.post('/api/items');
  this.put('/api/items/:id');
  this.del('/api/items/:id');

}
