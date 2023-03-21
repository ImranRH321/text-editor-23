// Bold Text
document.getElementById("id_bold_text").addEventListener("click", function () {
  const text_editor_type_text = document.getElementById(
    "text_editor_type_text"
  );
 
  const textEditorValue = text_editor_type_text.value;

  if (textEditorValue == null || textEditorValue == "") {
    confirm("Please type text. Can’t be blank or empty !");
  } else {
    text_editor_type_text.style.fontWeight = "bold";
  }
});




// Italic Text
document
  .getElementById("id_italic_text")
  .addEventListener("click", function () {
    const text_editor_type_text = document.getElementById(
      "text_editor_type_text"
    );

    const textEditorValue = text_editor_type_text.value;
    if (textEditorValue == null || textEditorValue == "") {
      confirm("Please type text. Can’t be blank or empty !");
    } else {
      text_editor_type_text.style.fontStyle = "italic";
    }
  });
// underline Text
document
  .getElementById("id_underline_text")
  .addEventListener("click", function () {
    const text_editor_type_text = document.getElementById(
      "text_editor_type_text"
    );

    const textEditorValue = text_editor_type_text.value;
    if (textEditorValue == null || textEditorValue == "") {
      confirm("Please type text. Can’t be blank or empty !");
    } else {
      text_editor_type_text.style.textDecoration = "underline";
    }
  });
// Left Text
document.getElementById("text_left").addEventListener("click", function () {
  const text_editor_type_text = document.getElementById(
    "text_editor_type_text"
  );

  const textEditorValue = text_editor_type_text.value;
  if (textEditorValue == null || textEditorValue == "") {
    confirm("Please type text. Can’t be blank or empty !");
  } else {
    text_editor_type_text.style.textAlign = "left";
  }
});
// Center Text
document.getElementById("middle_text").addEventListener("click", function () {
  const text_editor_type_text = document.getElementById(
    "text_editor_type_text"
  );

  const textEditorValue = text_editor_type_text.value;
  if (textEditorValue == null || textEditorValue == "") {
    confirm("Please type text. Can’t be blank or empty !");
  } else {
    text_editor_type_text.style.textAlign = "center";
  }
});
// right Text
document.getElementById("text_right").addEventListener("click", function () {
  const text_editor_type_text = document.getElementById(
    "text_editor_type_text"
  );

  const textEditorValue = text_editor_type_text.value;
  if (textEditorValue == null || textEditorValue == "") {
    confirm("Please type text. Can’t be blank or empty !");
  } else {
    text_editor_type_text.style.textAlign = "right";
  }
});


  // Text Capital 
document
  .getElementById("text_Capita_tag")
  .addEventListener("click", function () {
 
    const text_editor_type_text = document.getElementById(
      "text_editor_type_text"
    );
    text_editor_type_text.style.textTransform = "uppercase";
  });


// ===========
document
  .getElementById("input_font_size_id")
  .addEventListener("click", function () {

    const input_font_size_idText = document.getElementById("input_font_size_id")
    const input_font_size_idTextValue = input_font_size_idText.value;
console.log(input_font_size_idTextValue); 
  const fontPixel =  input_font_size_idTextValue + 'px';

    const inputDisplay = document.getElementById("text_editor_type_text")
    inputDisplay.style.fontSize = fontPixel; 
      
  });

//   color input picker
document
  .getElementById("color_input_piker")
  .addEventListener("change", function () {
    const input = document.getElementById("color_input_piker");
    const inputColor = input.value;
    console.log("inputColor",inputColor);

    const text_editor_type_text = document.getElementById(
      "text_editor_type_text"
    );

    const textEditorValue = text_editor_type_text.value;
    console.log(textEditorValue);
    if (textEditorValue == null || textEditorValue == "") {
      confirm("Please type text. Can’t be blank or empty !");
    } else {
      text_editor_type_text.style.color = inputColor;
    }
  });
