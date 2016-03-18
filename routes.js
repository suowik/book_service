module.exports = function (stockRepository) {
    return {
        stockUp: function (req, res, next) {
            return stockRepository.stockUp(req.body.isbn, req.body.count)
                .then(function (result) {
                    res.json(result);
                })
                .catch(next);
        },
        findByIsbn: function (req, res, next) {
            return stockRepository
                .findByIsbn(req.params.isbn)
                .then(function (result) {
                    if (result !== null) {
                        res.format({
                            html: function () {
                                res.send('<div class="copiesLeft">' + result + '</div>');
                            },

                            json: function () {
                                res.send({count: result});
                            }
                        });
                    } else {
                        next();
                    }
                })
                .catch(next);

        },
        findAll: function (req, res, next) {
            stockRepository
                .findAll()
                .then(function (docs) {
                    res.json(docs);
                })
                .catch(next);
        }
    };
};