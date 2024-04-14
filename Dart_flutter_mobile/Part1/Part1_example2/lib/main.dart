import 'package:flutter/material.dart';
import 'package:part1_example2/pages/home_page.dart';
import 'package:part1_example2/pages/login_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      initialRoute: LoginPage.PATH,
      routes: {
        LoginPage.PATH: (context) => LoginPage(),
        HomePage.PATH: (context) => HomePage(),
      },
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: LoginPage(),
    );
  }
}
