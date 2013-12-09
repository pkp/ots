<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" exclude-result-prefixes="xlink"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xlink="http://www.w3.org/1999/xlink">

  <xsl:output method="xml" encoding="utf-8" omit-xml-declaration="yes" indent="yes"/>

  <!-- new elements added for randomshapes layout -->
  <xsl:template match="/">
  <html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>  
      <xsl:for-each select="article/front/article-meta/title-group/article-title">
        <title>
          <xsl:value-of select="string(.)"/>
        </title>
      </xsl:for-each>
    <link href="style/app.css" rel="stylesheet"/>
    <script src="script/app.js"></script>
  </head>
  <body>
  <div class="container">
  <div class="sidebar col-md-3">
  <ul class="nav nav-pills nav-stacked version1">
    <xsl:for-each select="article/body/sec/title">
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
    <div class="context authors" itemprop="authors">
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
  <main class="body" id="body" lang="en">
  <xsl:for-each select="article/body/sec">
    <section class="sec">
      <xsl:for-each select="title">
        <h3 class="heading" data-ignore-class="">
          <xsl:attribute name="id">
            <xsl:value-of select="translate(string(.), ' ','')"/>
          </xsl:attribute>
          <xsl:value-of select="string(.)"/>
        </h3>
      </xsl:for-each>
      <xsl:apply-templates/>
    </section>
  </xsl:for-each>
  </main>
  <xsl:for-each select="article/back/ack/sec">
    <xsl:for-each select="title">
      <a href="#" class="toggle-link version1" data-toggle="acknowledgments"><h2><span class="glyphicon glyphicon-chevron-right"></span>
        <xsl:value-of select="string(.)"/>  
      </h2></a>
    </xsl:for-each>
    <section id="Acknowledgments">
      <xsl:for-each select="p">  
        <p class="p">
          <xsl:value-of select="string(.)"/>
        </p>
      </xsl:for-each>
    </section>
  </xsl:for-each>
  <xsl:for-each select="article/back/ref-list">
    <a href="#" class="toggle-link version1" data-toggle="references"><h2><span class="glyphicon glyphicon-chevron-right"></span>References</h2></a>
    <section id="References">
      <ul>
        <xsl:for-each select="ref">
          <li>
            <xsl:attribute name="rid">
              <xsl:value-of select="@rid"/>
            </xsl:attribute>
            <a>
              <xsl:attribute name="name">
                <xsl:value-of select="@rid"/>
              </xsl:attribute>
            </a>
            <xsl:for-each select="citation">
              <xsl:value-of select="string(.)"/>
            </xsl:for-each>
          </li>
        </xsl:for-each>
      </ul>
    </section>
  </xsl:for-each>
  </div>
  </div>
  </body>
  </html>
  </xsl:template>

  <xsl:template match="p">
    <p class="p">
      <xsl:apply-templates/>
    </p>
  </xsl:template>

  <xsl:template match="table-wrap">
    <xsl:for-each select="table">
    <div class="well">
    <p class="p">
    <div class="table">
    <table>
      <xsl:for-each select="thead">
        <thead>
          <xsl:for-each select="tr">
            <tr>
              <xsl:for-each select="td">
                <td>
                  <xsl:value-of select="string(.)"/>
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
                  <xsl:value-of select="string(.)"/>
                </td>
              </xsl:for-each>
            </tr>
          </xsl:for-each>
        </tbody>
      </xsl:for-each>
    </table>
    </div>
    </p>
    </div>
    </xsl:for-each>
  </xsl:template>

  <xsl:template match="fig">
    <figure class="fig well">
      <div class="image-container">
        <xsl:for-each select="graphic">
          <a class="popup">
            <xsl:attribute name="href">
              <xsl:value-of select="@xlink:href"/>
            </xsl:attribute>
            <img class="graphic">
              <xsl:attribute name="src">
                <xsl:value-of select="@xlink:href"/>
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

  <xsl:template match="xref">
    <a class="xref">
      <xsl:attribute name="href">
        #<xsl:value-of select="@rid"/>
      </xsl:attribute>
      <xsl:attribute name="rid">
        <xsl:value-of select="@rid"/>
      </xsl:attribute>
      <xsl:attribute name="ref-type">
        <xsl:value-of select="@ref-type"/>
      </xsl:attribute>
      <xsl:value-of select="string(.)"/>
    </a>
  </xsl:template>

  <xsl:template match="sec">
    <section class="sec">
      <xsl:for-each select="title">
        <h3 class="heading" data-ignore-class="">
          <xsl:value-of select="string(.)"/>
        </h3>
      </xsl:for-each>
      <xsl:apply-templates/>
    </section>
  </xsl:template>

  <!-- ignore namespaced attributes -->
  <xsl:template match="@*[namespace-uri()]"></xsl:template>

</xsl:stylesheet>
