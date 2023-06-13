routes.post('/product', ProductController.create)

routes.get('/initTable', ProductController.initTable)
routes.get('/consulta1', ProductController.consulta1)
routes.get('/consulta2', ProductController.consulta2)
routes.get('/consulta3', ProductController.consulta3)
routes.get('/consulta4', ProductController.consulta4)

routes.get('/product', ProductController.list)
routes.get('/product/:id', ProductController.find)
routes.put('/product/:id', ProductController.update)
routes.delete('/product/:id', ProductController.delete)
