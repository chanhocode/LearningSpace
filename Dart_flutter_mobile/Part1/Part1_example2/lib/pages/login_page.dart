import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:part1_example2/components/my_text_form_field.dart';
import 'package:part1_example2/pages/home_page.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  static String PATH = "/LoginPage";

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    var _key = GlobalKey<FormState>();

    var textId = TextEditingController();
    var textPwd = TextEditingController();

    @override
    void dispose() {
      textId.dispose();
      textPwd.dispose();
      super.dispose();
    }
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        body: InkWell(
          onTap: () {
            print("body click");
            FocusScope.of(context).requestFocus(FocusNode());
          },
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Center(
              child: Form(
                key: _key,
                child: ListView(
                  children: [
                    Spacer(),
                    SvgPicture.asset(
                      "assets/svgs/logo.svg",
                      width: 120,
                      height: 120,
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Text(
                      'Flutter Mart',
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    MyTextFormField(
                      textId,
                      title: "ID",
                      hint: "아이디를 입력해주세요.",
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    MyTextFormField(
                      textPwd,
                      title: "Password",
                      hint: "패스워드를 입력해주세요.",
                      isPassword: true,
                    ),
                    SizedBox(
                      height: 50,
                    ),
                    ElevatedButton(
                      onPressed: () {
                        if(_key.currentState!.validate()) {
                          // ok
                          print("Ok!");
                          print("id: ${textId.text}, pwd: ${textPwd.text}");
                          Navigator.pushNamed(context, HomePage.PATH);
                          return;
                        }
                        // error
                        print("login error");
                      },
                      child: Text("LOGIN"),
                    ),
                    Spacer(),
                    Spacer(),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
