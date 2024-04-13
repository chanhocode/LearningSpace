import 'package:flutter/material.dart';
import 'package:part1_example1/tools/genString.dart';

class ProfileHeader extends StatelessWidget {
  const ProfileHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: Row(
        children: [
          _buildUserImage(),
          SizedBox(
            width: 50,
          ),
          _buildUserInfo(),
        ],
      ),
    );
  }

  _buildUserInfo() {
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "nickname",
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
            ),
          ),
          Text(
            GenString.getGString(50),
            overflow: TextOverflow.ellipsis,
            style: TextStyle(fontSize: 20),
          ),
          SizedBox(height: 5,),
          TextButton(
            child: Text(
              GenString.getGString(15),
              style: TextStyle(
                fontSize: 16,
              ),
            ),
            onPressed: () {},
          ),
        ],
      ),
    );
  }

  _buildUserImage() {
    return Container(
      width: 100,
      height: 100,
      decoration: BoxDecoration(
          shape: BoxShape.circle,
          image: DecorationImage(
            image: AssetImage('assets/images/ex01.jpg'),
            fit: BoxFit.cover,
          )),
    );
  }
}
