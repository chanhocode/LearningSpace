import 'package:flutter/material.dart';

class ProfileDrawer extends StatelessWidget {
  const ProfileDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width * 0.66,
      color: Colors.yellow,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: ListView(
          children: [
            CircleAvatar(
              backgroundImage: AssetImage("assets/images/ex01.jpg"),
              radius: 50,
            ),
            Text("nickname"),
            Divider(color: Colors.black,)
          ],
        ),
      ),
    );
  }
}
