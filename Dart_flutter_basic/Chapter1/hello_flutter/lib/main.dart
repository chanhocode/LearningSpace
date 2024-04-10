import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
          appBar: AppBar(
            title: Text(
              'hello',
              style: TextStyle(fontSize: 28),
            ),
            centerTitle: true,
          ),
          body: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(32.0),
                    child: Image.network(
                      "https://i.ibb.co/CwzHq4z/trans-logo-512.png",
                      width: 81,
                    ),
                  ),
                  TextField(
                    decoration: InputDecoration(labelText: 'email'),
                  ),
                  TextField(
                    obscureText: true,
                    decoration: InputDecoration(labelText: 'password'),
                  ),
                  Container(
                    width: double.infinity,
                    margin: EdgeInsets.only(top: 16),
                    child: ElevatedButton(
                      onPressed: () {},
                      child: Text('login'),
                    ),
                  )
                ],
              ),
            ),
          )),
    );
  }
}
