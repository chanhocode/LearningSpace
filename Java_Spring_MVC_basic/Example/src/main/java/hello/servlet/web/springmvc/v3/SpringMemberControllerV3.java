package hello.servlet.web.springmvc.v3;

import hello.servlet.domain.member.Member;
import hello.servlet.domain.member.MemberRespository;
import hello.servlet.web.frontcontroller.ModelView;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
@RequestMapping("/springmvc/v3/members")
public class SpringMemberControllerV3 {
    private MemberRespository memberRespository = MemberRespository.getInstance();

    //@RequestMapping(value = "/new-form", method = RequestMethod.GET)
    @GetMapping("/new-form")
    public String newForm() {
        return "new-form";
    }

    //@RequestMapping(value = "/save", method = RequestMethod.POST)
    @PostMapping("/save")
    public String members(@RequestParam("username") String username,
                                @RequestParam("age") int age,
                                Model model) {

        Member member = new Member(username, age);
        memberRespository.save(member);

        model.addAttribute("member", member);
        return "save-result";
    }

    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public String save(Model model) {
        List<Member> members = memberRespository.findAll();
        model.addAttribute("members", members);

        return "members";

    }
}
