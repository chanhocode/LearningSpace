import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  static String PATH = "/HomePage";

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("homePage"),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: Text("logout"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
