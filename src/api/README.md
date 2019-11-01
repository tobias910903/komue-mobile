```
this.$ajax.testAjax1({page:1}).then((response) => {
  console.log(response);
}).catch(function (err) {
  console.log(err);
});

this.$ajax.testAjax2().then((response) => {
  console.log(response);
}).catch(function (err) {
  console.log(err);
});
```
