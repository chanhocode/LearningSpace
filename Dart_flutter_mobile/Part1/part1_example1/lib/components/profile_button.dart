import 'package:flutter/material.dart';

class ProfileButton extends StatefulWidget {
  const ProfileButton({super.key});

  @override
  State<ProfileButton> createState() => _ProfileButtonState();
}

class _ProfileButtonState extends State<ProfileButton> {
  late double _width;

  @override
  Widget build(BuildContext context) {
    _width = MediaQuery.of(context).size.width;
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        _buildFollowButton(),
        _buildMessageButton(),
      ],
    );
  }

  _buildFollowButton() {
    return InkWell(
      onTap: () {

      },
      child: Container(
        width: _width * 0.7 / 2,
        height: 40,
        alignment: Alignment.center,
        decoration: BoxDecoration(
            color: Colors.blue, borderRadius: BorderRadius.circular(10)),
        child: Text(
          '팔로잉',
          style: TextStyle(color: Colors.white),
        ),
      ),
    );
  }

  _buildMessageButton() {
    return InkWell(
      onTap: () {

      },
      child: Container(
        width: _width * 0.7 / 2,
        height: 40,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: Colors.blue),
          borderRadius: BorderRadius.circular(10),
        ),
        child: Text(
          '팔로잉',
          style: TextStyle(color: Colors.black87),
        ),
      ),
    );
  }
}
