var koa = require('koa');
var parse = require('co-body');
var session = require('koa-session');
var mandate = require('./models/mandate');
var views = require('co-views');
var dust = require('dustjs-linkedin');
var render views('views', {
  map: {html: }
})

var form = '<form action="/login" method="POST">\
  <input name="username" type="text" value="username">\
  <input name="password" type="password" placeholder="The password is \'password\'">\
  <button type="submit">Submit</button>\
</form>';

var app = koa();

app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

app.use(function * home(next) {
  if (this.request.path !== '/') return yield next;
  if (this.session.authenticated) return this.body = 'hello world';
  this.status = 401;
});

app.use(function * login(next){
  if (this.request.path !== '/login') return yield next;
  if (this.request.method == 'GET') return this.body = form;
  if (this.request.method !== 'POST') return;

  var body = yield parse(this);
  if (body.username !== 'username'
    || body.password !== 'password') return this.status = 400;

  this.session.authenticated = true;
  this.redirect('/');
});

app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield next;
  this.session.authenticated = false;
  this.redirect('/login');
});

app.use(function * showmandates(next){
  if (this.request.path !== '/mandates') return yield next;
  if (this.request.method !== 'GET') return yield next;
  if (this.session.authenticated) {
    var p = mandate.collection().fetch()
    return this.body = p;};
  this.status = 401;
});

function server(port) {
  app.listen(port)
}
module.exports = server;
