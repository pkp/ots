<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:mml="http://www.w3.org/1998/Math/MathML"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    exclude-result-prefixes="xlink xs mml"
    version="1.0">

    <xsl:template match="/">
        <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html></xsl:text>
        <!-- new elements added for randomshapes layout -->
        <html>
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <xsl:for-each select="article/front/article-meta/title-group/article-title">
                    <title>
                        <xsl:value-of select="string(.)"/>
                    </title>
                </xsl:for-each>
                <link href="css/article.css" rel="stylesheet"></link>
                <script src="js/article.js"></script>
            </head>
            <body>
                <div class="container">
                    <div class="sidebar col-md-3">
                        <ul class="nav nav-pills nav-stacked version1">
                            <xsl:for-each select="//sec/title">
                                <li>
                                    <a>
                                        <xsl:attribute name="href">
                                            #<xsl:value-of select="translate(string(.), ' ','')"/>
                                        </xsl:attribute>
                                        <xsl:value-of select="string(.)"/>
                                    </a>
                                </li>
                            </xsl:for-each>
                        </ul>
                    </div>
                    <div class="content col-md-9">
                        <header class="front version1">
                            <xsl:for-each select="article/front/article-meta/title-group/article-title">
                                <h1 class="article-title">
                                    <xsl:value-of select="string(.)"/>
                                </h1>
                            </xsl:for-each>
                            <div class="context authors">
                            <!-- <div class="context authors" itemprop="authors"> -->
                                <xsl:for-each select="article/front/article-meta/contrib-group/contrib/given-names">
                                    <xsl:value-of select="string(.)"/>,
                                </xsl:for-each>
                            </div>
                            <p class="context event" data-ignore-class="">
                            </p>
                        </header>
                        <a href="#" class="toggle-link version1" data-toggle="abstract"><h2><span class="glyphicon glyphicon-chevron-right"></span>Abstract</h2></a>
                        <section id="abstract" class="version1">
                            <xsl:for-each select="article/front/article-meta/abstract/sec/p">
                                <p>
                                    <xsl:value-of select="string(.)"/>
                                </p>
                            </xsl:for-each>
                        </section>
                        <a href="#" class="toggle-link version1" data-toggle="body"><h2><span class="glyphicon span-body glyphicon-chevron-down"></span>Manuscript</h2></a>

                        <article itemscope="itemscope">
                        <!-- <article itemscope="itemscope" itemtype="scholarlyarticle"> -->
                            <xsl:apply-templates select="article/front"/>
                            <xsl:apply-templates select="article/body"/>
                            <xsl:apply-templates select="article/back"/>
                        </article>

                        <!-- closing tags for randomshapes layout -->
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="body">

    <main class="{local-name()}" lang="en">
      <xsl:apply-templates select="node()|@*"/>
    </main>
  </xsl:template>

  <xsl:template match="back">
    <footer class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
    </footer>
  </xsl:template>

  <!-- ordered list -->
  <xsl:template match="list[@list-type='order']">
    <ol class="{local-name()}">
      <xsl:apply-templates select="node()"/>
    </ol>
  </xsl:template>

  <!-- unordered list -->
  <xsl:template match="list">
    <ul class="{local-name()}">
      <xsl:apply-templates select="node()"/>
    </ul>
  </xsl:template>

  <!-- list item -->
  <xsl:template match="list-item">
    <li class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
    </li>
  </xsl:template>

  <!-- paragraph -->
  <xsl:template match="p">
    <p class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
    </p>
  </xsl:template>

  <!-- the article title -->
  <xsl:template match="article-title">
    <h1 class="{local-name()}"><xsl:apply-templates select="node()|@*"/></h1>
  </xsl:template>

  <!-- people -->
  <xsl:template match="person-group">
    <div class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
    </div>
  </xsl:template>

    <!-- name -->
  <xsl:template match="contrib">
    <span class="{local-name()}">
      <xsl:call-template name="name"/>
    </span>
    <xsl:if test="not(position() = last())">, </xsl:if>
  </xsl:template>

  <!-- name -->
  <xsl:template name="name">
    <xsl:apply-templates select="given-names"/>
    <xsl:if test="surname">
      <xsl:text> </xsl:text>
      <xsl:apply-templates select="surname"/>
    </xsl:if>
  </xsl:template>

  <!-- name -->
  <xsl:template match="name">
    <span class="{local-name()}">
      <xsl:call-template name="name"/>
    </span>
    <xsl:if test="not(position() = last())">, </xsl:if>
  </xsl:template>

  <!-- style elements -->
  <xsl:template match="italic | bold | sc | strike | sub | sup | underline | inline-formula">
    <span class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
    </span>
  </xsl:template>

  <!-- inline elements -->
  <xsl:template match="abbrev | surname | given-names | email | label | year | month | day | xref | contrib | source | volume | fpage | lpage | etal | pub-id | named-content | x">
    <span class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
    </span>
  </xsl:template>

  <!-- table elements [modified from macrodocs] -->
  <xsl:template match="table-wrap">
    <xsl:for-each select="table">
    <div class="well">
    <div class="table">
    <table>
      <xsl:for-each select="thead">
        <thead>
          <xsl:for-each select="tr">
            <tr>
              <xsl:for-each select="td">
                <td>
                  <xsl:apply-templates select="node()"/>
                </td>
              </xsl:for-each>
            </tr>
          </xsl:for-each>
        </thead>
      </xsl:for-each>
      <xsl:for-each select="tbody">
        <tbody>
          <xsl:for-each select="tr">
            <tr>
              <xsl:for-each select="td">
                <td>
                  <xsl:apply-templates select="node()"/>
                </td>
              </xsl:for-each>
            </tr>
          </xsl:for-each>
        </tbody>
      </xsl:for-each>
      <xsl:for-each select="tr">
        <tr>
          <xsl:for-each select="td">
            <td>
              <xsl:apply-templates select="node()"/>
            </td>
          </xsl:for-each>
        </tr>
      </xsl:for-each>
    </table>
    </div>
    </div>
    </xsl:for-each>
  </xsl:template>

  <!-- sections -->
  <xsl:template match="sec">
    <section class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
    </section>
  </xsl:template>

  <xsl:template match="title">
    <h3 class="heading" data-ignore-class="">
      <xsl:attribute name="id">
        <xsl:value-of select="translate(string(.), '&#x20;&#x9;&#xD;&#xA;','')"/>
      </xsl:attribute>
      <xsl:value-of select="string(.)"/>
    </h3>
  </xsl:template>

  <xsl:template match="supplementary-material/caption/title">
    <section class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
    </section>
  </xsl:template>

  <xsl:template match="sec[@sec-type='additional-information']/title">
    <h2><xsl:apply-templates select="node()|@*"/></h2>
  </xsl:template>

  <!-- links -->
  <xsl:template match="ext-link">
    <a class="{local-name()}" href="{@xlink:href}">
      <xsl:apply-templates select="node()"/>
    </a>
  </xsl:template>

  <xsl:template match="ext-link[@ext-link-type='doi']">
    <a class="{local-name()}" href="http://dx.doi.org/{@xlink:href}">
      <xsl:apply-templates select="node()"/>
    </a>
  </xsl:template>

  <xsl:template match="xref">
    <a class="xref">
      <xsl:attribute name="href">
        #<xsl:value-of select="@rid"/>
      </xsl:attribute>
      <xsl:value-of select="string(.)"/>
    </a>
  </xsl:template>

  <xsl:template match="fig">
    <figure class="fig well">
      <div class="image-container">
        <xsl:for-each select="graphic">
          <a class="popup">
            <xsl:attribute name="href">
              <!--xsl:value-of select="{@xlink:href}"/-->
              <xsl:value-of select="./@xlink:href"/>
            </xsl:attribute>
            <img class="graphic">
              <xsl:attribute name="src">
                <!--xsl:value-of select="{@xlink:href}"/-->
                <xsl:value-of select="./@xlink:href"/>
              </xsl:attribute>
            </img>
          </a>
        </xsl:for-each>
      </div>
      <xsl:for-each select="caption">
        <figcaption/>
        <xsl:value-of select="string(.)"/>
      </xsl:for-each>
    </figure>
  </xsl:template>

  <!-- supplementary material -->
  <xsl:template match="supplementary-material">
    <div class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
      <a href="{@xlink:href}" download="" class="btn">Download</a>
    </div>
  </xsl:template>

  <!-- acknowledgments -->
  <xsl:template match="ack">
    <section class="{local-name()}">
      <xsl:apply-templates select="@*"/>
      <xsl:if test="not(title)">
        <h2 class="heading">Acknowledgments</h2>
      </xsl:if>
      <xsl:apply-templates select="node()"/>
    </section>
  </xsl:template>

  <xsl:template match="ref-list">
    <a href="#" class="toggle-link version1" data-toggle="references"><h2><span class="glyphicon glyphicon-chevron-right"></span>References</h2></a>
    <section id="References">
      <ul>
        <xsl:for-each select="ref">
          <li>
            <xsl:attribute name="rid">
              <xsl:value-of select="@id"/>
            </xsl:attribute>
            <a>
              <xsl:attribute name="name">
                <xsl:value-of select="@id"/>
              </xsl:attribute>
            </a>
            <xsl:for-each select="element-citation">
              <xsl:value-of select="string(.)"/>
            </xsl:for-each>
          </li>
        </xsl:for-each>
      </ul>
    </section>
  </xsl:template>

  <!-- "et al" -->
  <xsl:template match="person-group/etal">
    <span class="{local-name()}">et al.</span>
  </xsl:template>

  <!-- block elements -->
  <xsl:template match="*">
    <div class="{local-name()}">
      <xsl:apply-templates select="node()|@*"/>
    </div>
  </xsl:template>

  <!-- attributes (direct copy) -->
  <xsl:template match="@*">
    <xsl:copy-of select="."/>
  </xsl:template>

  <!-- ignore namespaced attributes -->
  <xsl:template match="@*[namespace-uri()]"></xsl:template>

  <!-- mathml (direct copy) -->
  <xsl:template match="mml:math">
    <xsl:copy-of select="."/>
  </xsl:template>

</xsl:stylesheet>
