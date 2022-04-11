import MesasgeRouter from './modules/message.js';

export default function(app) {
    app.use('/message', MesasgeRouter);

    app.get('/', (request, response) => {
        response.render("index");
    });
}