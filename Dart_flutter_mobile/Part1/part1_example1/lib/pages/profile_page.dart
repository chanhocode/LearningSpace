import 'package:flutter/material.dart';
import 'package:part1_example1/components/profile_button.dart';
import 'package:part1_example1/components/profile_count.dart';
import 'package:part1_example1/components/profile_drawer.dart';
import 'package:part1_example1/components/profile_header.dart';
import 'package:part1_example1/components/profile_tab.dart';


class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: ProfileDrawer(),
      appBar: AppBar(
        title: Text('nickname'),
      ),
      body: Column(
        children: [
          ProfileHeader(),
          ProfileButton(),
          SizedBox(height: 10,),
          Divider(height: 1, color: Color(0xffc0c0c0)),
          ProfileCount(),
          Divider(height: 1, color: Color(0xffc0c0c0)),
          SizedBox(height: 10,),
          Expanded(child: ProfileTab())
        ],
      ),
    );
  }
}
