import 'package:flutter/material.dart';
import 'package:part1_example1/pages/profile_page.dart';
import 'package:part1_example1/theme.dart';


void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: theme(),
      debugShowCheckedModeBanner: false,
      home: const ProfilePage(),
    );
  }
}
