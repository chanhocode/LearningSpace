import 'package:flutter/material.dart';

class MyTextFormField extends StatefulWidget {
  final String title;
  final String hint;
  final bool isPassword;
  final TextEditingController controller;

  MyTextFormField(this.controller,
      {required this.title, this.hint = "", this.isPassword = false});

  @override
  State<MyTextFormField> createState() => _MyTextFormFieldState();
}

class _MyTextFormFieldState extends State<MyTextFormField> {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            SizedBox(
              width: 10,
            ),
            Text(
              widget.title,
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w400,
                color: Colors.blue,
              ),
            ),
          ],
        ),
        SizedBox(
          height: 5,
        ),
        TextFormField(
          controller: widget.controller,
          validator: (value) {
            if(value == null || value!.isEmpty || value!.trim() == "") {
              return "${widget.title}을(를) 입력해주세요.";
            }
            return null;
          },
          obscureText: widget.isPassword,
          decoration: InputDecoration(
            hintText: widget.hint,
            enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
                borderSide: BorderSide(color: Colors.black54)),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
            ),
            errorBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
              borderSide: BorderSide(
                color: Colors.deepOrangeAccent,
              )
            ),
            focusedErrorBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10,),
              borderSide: BorderSide(color: Colors.orangeAccent),
            )
          ),
        )
      ],
    );
  }
}
