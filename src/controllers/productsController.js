const controller = {};
// Show Products
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) console.log(err);
    conn.query("SELECT * FROM item", (err, items) => {
      if (err) res.json(err);
      res.render("viewProducts", {
        data: items,
      });
    });
  });
};

// Insert Product
controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    if(err) console.error(err);
    conn.query("INSERT INTO item SET ?", [data], (err, item) => {
      res.redirect("/");
    });
  });
};

// Show Product
controller.select = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM item WHERE id = ?", [id], (err, rows) => {
      res.render("viewEdit", {
        data: rows,
      });
    });
  });
};

// Update Products
controller.update = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const newBody = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE item SET ? WHERE id = ? ",
      [newBody, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};
controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM item WHERE id = ?", [id], (err, rows) => {
      res.redirect("/");
    });
  });
};

module.exports = controller;
