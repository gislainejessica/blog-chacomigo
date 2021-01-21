import Head from 'next/head'

import Menu from '../components/Header'
import Footer from '../components/Footer'

import { Container, MaxWidth } from '../styles/pages/Article'
import { useRouter } from 'next/router'

export default function Faq() {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Container>
        <MaxWidth>
          <h2> Perguntas frequentes </h2>

          <p>
            {/* Some of these are not actually asked frequently, but they're still good to know. */}
            Algumas das perguntas mais frequentes e posséveis dúvidas que possa vir a surgir resumidas aqui.
            <br />
            <br />
            <span> Quem pode postar no ChaComigo Blog?</span>
            <br />
            <br />
            Qualquer pessoa! É isso mesmo, você também pode fazer seus postes aqui na comunidade
            basta preencher um formulário e aceitar os termos de publicações de contéudo.
            {/* Anyone! Yes, you have permission to make a new post of any kind as long as it meets our community guidelines and
            gets through common-sense spam filters. Your post is subject to removal at the discretion of the moderators
            if they believe it does not meet the requirements of our code of conduct. */}
            {/*
            <br /><span>How do I post article on dev.to?</span><br />
            Click on "Write a Post" in the top right corner of the site. Write your article, give it a title, tag it with appropriate tags, and fill out any other relevant fields. Then, once you're ready, change published: false to published: true in the front matter of the post and save. Your post will now be published.

            <br /><span>Is there a guide for how to use DEV's editor?</span><br />
            Yes! Here is our editor guide, you can also find it by clicking the "?" page in the editor.

            <br /><span>How do I get featured on the home page?</span><br />
            The home page is selected by our editorial team. You can email us with any specific questions.

            <br /><span>Can I cross-post something I've already written on my own blog or Medium?</span><br />
            Absolutely, as long as you have the rights you need to do so! And if it's of high quality, we'll feature it.

           <br /><span> How do I change my Twitter/GitHub username?</span><br />
            You can add or remove Twitter/GitHub associations from your settings, but note that you can only do this if both Twitter and GitHub are connected to your account. If you have any issues with this, email yo@dev.to and we'll take care of it.

           <br /><span> What about my post's Google ranking?</span><br />
            You can set the canonical_url of your post before publishing so that Google knows where to send the link juice (that precious, precious link juice).

            <br /><span>How do I report spam?</span><br />
            For a specific comment: navigate to the comment and click the dropdown arrow to report abuse.

            For a specific article: navigate to the article, scroll to the bottom and click report abuse.

            In general, you can fill out the report abuse form.

           <br /><span> How does dev.to make money?</span><br />
            Right now, we count on listings and sponsors. We also sell some merchandise on The DEV Shop.

           <br /><span> What's up with your sponsors?</span><br />
            If you have questions about sponsorships (i.e. how to turn off sponsor displays), visit our sponsorship info page.

          <br /><span>  How do I delete my account?</span><br />
            You'll find the option to delete your account in your settings. Self-deletion will remove your DEV profile, and all articles, comments, Connect messages, etc.

            If you require a full GDPR deletion, please e-mail yo@dev.to with the subject line "GDPR Delete Request" and we will ensure that any of your remaining data is purged from all systems.

          <br /><span>  Do I own the articles that I publish?</span><br />
            Yes, you own the rights to the content you create and post on dev.to and you have the full authority to post, edit, and remove your content as you see fit.

            By posting content on dev.to, you give us a nonexclusive license to publish it, including anything reasonably related to publishing it (like storing, displaying, reformatting, and distributing it).

            <br /><span>Will you put ads on my posts' pages?</span><br />
            No ad will ever be placed next to a user's post without their consent in the matter.

          <br /><span>  How do I set a cover image on my post?</span><br />
            Include cover_image: [url] in the front matter of your post. For more information on our editor, check out our editor guide.

            <br /><span>How does comment threading work?</span><br />
            Comments are threaded with a maximum depth, and then they become flat. You can respond to flattened-out threads by replying to the last comment in the overall thread.

           <br /><span> Can I hide comments on my own posts?</span><br />
            Yes. To hide a comment that was added to one of your posts, simply click the dropdown connected to the comment and select the "Hide" option. You can read our original changelog post on the feature for more information.

            <br /><span>Can I use profanity in my posts?</span><br />
            We don’t disallow profanity in general, but we do have an internal policy of not boosting posts through our social channels that have profanity in the title, so you might want to keep that in mind.

            <br /><span>Can I follow RSSes on DEV?</span><br />
            Yes, you can. The link for our main feed can be found here: https://dev.to/feed. For user-specific feeds, you can find them via https://dev.to/feed/username. For tag-specific feeds, you can find them via https://dev.to/feed/tag/tagname. */}
          </p>
        </MaxWidth>
      </Container>

      <Footer />
    </>
  )
}
