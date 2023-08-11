package com.ltb35.ltb35;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlHeading1;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@RunWith(SpringRunner.class)
@WebMvcTest(SampleController.class)
public class SampleControllerTest {

//    @Autowired
//    MockMvc mockMvc;
//    @Test
//    public void hello() throws Exception {
//        // request: "/" :: response: model: name : "chanho", view: hello
//        mockMvc.perform(get("/hello"))
//                .andExpect(status().isOk())
//                .andExpect(view().name("hello"))
//                .andExpect(model().attribute("name", is("chanho")))
//                .andExpect(content().string(containsString("chanho")));
//    }

    @Autowired
    WebClient webClient;
    @Test
    public void hello() throws Exception {
        HtmlPage page = webClient.getPage("/hello");
        HtmlHeading1 h1 = page.getFirstByXPath("//h1");
        assertThat(h1.getTextContent()).isEqualToIgonoringCase("chanho");
    }

}