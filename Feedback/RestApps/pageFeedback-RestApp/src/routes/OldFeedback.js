import router from "@sitevision/api/common/router";


router.get("/OldFeedBack", (req, res) => {

 const oldFeedback = true;
 res.json({
   oldFeedback,
 });
});