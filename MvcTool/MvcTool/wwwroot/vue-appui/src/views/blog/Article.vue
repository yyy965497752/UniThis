<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="card card-body">
          <h1 class="article__title">Get ready for Lorem Ipsum</h1>
          <div class="post-header">
            <div class="published">
            <span class="publishdate" itemprop="datePublished">
            Friday, May 12, 2017
            </span>
            </div>
          </div>

          <div class="post-body">
            <div class="post-content post-original" itemprop="articleBody">
              <p><em>Posted by Betty Stewart, Product Marketing Manager</em></p>
              <p>Per an appareat definiebas, sea et hinc reprehendunt. Eam iudico vocibus ut, quo iudicabit intellegebat cu, quo iudico veniam ocurreret at. Verear malorum labitur cum ex, cu sed error numquam suscipiantur, ad eam decore suavitate. Cum ad fabulas docendi, te purto dicta vis.</p>

              <p>Sonet aliquid omittantur id mea. Zril probatus vel et. His eu augue laudem. Ea vim autem sonet, integre pertinax id est. Id cibo fastidii usu, te cum possim appareat suscipiantur, vel viderer dolorum et. Altera accumsan cu vix. Ad per quaeque gloriatur, ne duo putent volumus.</p>

              <p>Sit scripta perfecto omittantur te, vel dolor decore et. Suas graecis pro cu. Id sint quando omittantur vim, possim intellegebat ea mel. Postea nemore laoreet eu qui, pri et saepe epicuri suavitate. Mel ei nusquam intellegat. Ius nisl partem inimicus an.</p>

              <h2 class="h5">Attending in person?</h2>
              <p>Lorem ipsum dolor sit amet, te mea dicta ullamcorper. Quando malorum definitionem ut eos, eos eu case iuvaret adipisci. No vix congue deserunt conceptam, ut quo erant decore fierent, nam nonumes mandamus ne. Vide tollit singulis an his. Pri harum utinam habemus in. Sea ei salutatus vulputate, te nam elit aliquam dolorum. Duo quis mucius contentiones ne, dico malorum lobortis no per.</p>

              <p>Legendos laboramus consectetuer an vix, eum voluptaria complectitur te. Summo paulo corrumpit mel ad, vel lobortis mnesarchum suscipiantur et, nec animal antiopam ex. In qui convenire mnesarchum, ea zril aperiam vim. Feugiat lobortis persequeris te cum. Id his iudico ceteros.</p>

              <h2 class="h5">Attending remotely?</h2>
              <p>Assum tation sensibus ne eam, quando nominati conclusionemque ex vix, mel eu accusata repudiare.</p>

              <ul>
                <li>
                  <b>I/O Extended</b>: Labore omittantur vis id. No duo vidisse urbanitas. Pri cu sale facer virtute. Ea illud repudiare similique per, sea assum mediocrem qualisque eu.
                </li>
                <li>
                  <b>Livestream</b>: Vel movet aliquip diceret ne, vim utamur euismod at. Cu nec debitis honestatis.
                </li>
                <li>
                  <b>I/O Live Widget</b>: Ut his euismod pertinax, eos ne utinam electram, nonumes suscipit ex vis. Impedit philosophia eu mei, cibo verterem eum id, tractatos splendide mnesarchum ea duo.
                </li>
                <li>
                  <b>I/O Guide</b>: Per semper alterum graecis id. Ex habeo rationibus est. Eu his veniam option, cu quem tantas eirmod eam.
                </li>
                <li>
                  <b>#io17request</b>: An cum integre dolorem, at sed purto invidunt assueverit. Pro minim iuvaret volumus ad, posse malorum nominati in pri.
                </li>
              </ul> 
              <span itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
                <meta content="https://plus.google.com/116899029375914044550" itemprop="url">
              </span>
            </div>
          </div>
          <!-- .post-body -->
        </div>

        <div class="card card-body">
          <h3 class="h5 card-title">Comments</h3>
          <comment-list
            :comments="sampleApiComments">
          </comment-list>
        </div>
      </div>

      <div class="col-md-4">
        <blog-sidebar></blog-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import BlogSidebar from './BlogSidebar'
import CommentList from '@/components/comment-list/CommentList'

import sampleApiComments from './sample-api-comments'

export default {
  data () {
    return {
      sampleApiComments
    }
  },
  components: {
    BlogSidebar,
    CommentList
  }
}
</script>
