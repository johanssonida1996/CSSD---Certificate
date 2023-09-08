import * as React from "react";
import TextInput from '../TextInput/TextInput';
import toasts from "@sitevision/api/client/toasts";
import router from "@sitevision/api/common/router";
import requester from "@sitevision/api/client/requester";
import i18n from "@sitevision/api/common/i18n";
import events from "@sitevision/api/common/events";

const App = () => {
  const onSubmit = (e) => {
    e.preventDefault(); 
    const form = e.currentTarget;

    const formData = new FormData(form);

    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    requester.doPost({
      url: router.getStandaloneUrl("/feedback"),
      data: formObject,
    })
    .then(() => {
      form.reset();
      toasts.publish({
        message: i18n.get("uploadSuccess"),
        type: "success",
      });
      events.trigger("pageFeed:reload");
    })
    .catch((error) => {
      console.error("ERROR: " + JSON.stringify(error));
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="env-form">
        <TextInput name="name" type="text" />
        <TextInput name="feedback" type="text" />
        <div className="env-form-element">
          <button type="submit" className="env-button env-button--primary">
            Skicka feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
