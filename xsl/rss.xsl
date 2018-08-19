<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/rss">
   <html>
   <head>
      <style type="text/css">
         body {
            font-size:0.83em;
            margin: 0;
         }
         a:visited {
            color:#666666;
         }

         a:hover {
            color: #F00;
         }

         #logo a:link, #logo a:visited {
            text-decoration:none;
            color:#FFF;
         }
         #logo {
            background-color:#07A9E0;
            padding:0.2em 0.4em 0.4em;
            color:#FFF;
            font-family:"Trebuchet MS", Verdana, Arial, SunSans-Regular, Sans-Serif; 
            font-size:240%;
         }
         .Snippet {
            margin-bottom:30px;
            border:1px solid #efefef;
            background-color:#FFFFEE;
         }

         .Snippet .title {
            background-color:#FFF;
            border-bottom:1px solid #efefef;
            color:#efefef;
            font-family:Tahoma, "Lucida Sans Unicode", Verdana, sans-serif;
            font-size:86%;
            letter-spacing:0.1em;
            margin:0;
            padding:0.3em 1em;
         }

         .Snippet dl {
            margin-left:1em;
         }
         .Snippet dl dd {
            font-size:110%;
            margin:0;
            font-family:Tahoma, Verdana, Arial, Helvetica, sans-serif;
            padding-bottom:0.2em;
         }
         .Snippet dl dt {
            border-bottom: 1px solid #EEE;
            font-size:86%;
            line-height:145%;
            margin-bottom:0.6em;
            padding-bottom:0.4em;
         }
         .Snippet dl dt .pubDate {
            color:#666;
            font-size:86%;
         }
      </style>
   </head>
   <body>
      <div id="logo">
         <xsl:element name="a">
            <xsl:attribute name="href">
               <xsl:value-of select="channel/link" />
            </xsl:attribute>
            <xsl:value-of select="channel/title" />
         </xsl:element>
      </div>
      <div class="Snippet" style="border-width:0; background-color:#FFF; margin:1em">
         <div class="title">
            <xsl:value-of select="channel/description" />
         </div>
         <dl style="padding-right:1em">
            <xsl:for-each select="channel/item">
               <dd>
                  <xsl:element name="a">
                     <xsl:attribute name="href">
                        <xsl:value-of select="link"/>
                     </xsl:attribute>
                     <xsl:value-of select="title"/>
                  </xsl:element>
               </dd>
               <dt>
                  <xsl:value-of select="description" /><br />
                  <span class="pubDate"><xsl:value-of select="pubDate" /></span>
               </dt>
            </xsl:for-each>
         </dl>
      </div>
      <div id="footer">
         <xsl:value-of select="channel/copyright" />
      </div>
   </body>
   </html>
</xsl:template>
</xsl:stylesheet>
