import 'package:flutter/material.dart';

class ProfileCount extends StatefulWidget {
  const ProfileCount({super.key});

  @override
  State<ProfileCount> createState() => _ProfileCountState();
}

class _ProfileCountState extends State<ProfileCount> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10.0),

      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          buildCountInfo("posts", '74'),
          _buildDivede(),
          buildCountInfo("follower", '124K'),
          _buildDivede(),
          buildCountInfo("following", '11K'),
        ],
      ),
    );
  }

  Container _buildDivede() {
    return Container(
      width: 2,
      height: 30,
      color: Colors.blue,
    );
  }

  Column buildCountInfo(String title, String count) {
    return Column(
      children: [
        Text(title, style: TextStyle(
          fontSize: 14,
          color: Colors.black54,
        ),),
        SizedBox(height: 5,),
        Text(count, style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w400,
            color: Colors.black87
        ),),
      ],
    );
  }
}
