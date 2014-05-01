	

<h3>{{ category:title }}</h3>


{{ if posts }}
{{ posts }}

<div class="post">

	<h3 id="{{ slug }}">{{ theme:image file="link.png" }} <a href="{{ url }}">{{ title }}</a></h3>
	<div class="meta">

		<div class="date">
			<h6>{{ helper:lang line="blog:posted_label" }}
				<strong>{{ helper:date timestamp=created_on }}</strong>
			</h6>
		</div>

		{{ if category }}
		<div class="category">
			<h6>
				{{ helper:lang line="blog:category_label" }}
				<span><a href="{{ url:site }}blog/category/{{ category:slug }}">{{ category:title }}</a></span>
			</h6>
		</div>
		{{ endif }}

	</div> <!-- /meta -->
	<span class="row">
		{{if teaser_image == ''}}

		<p class="preview">{{ preview }}
		</p>
		{{else}}

		<p class="preview">
			<img src="{{ url:site }}files/large/{{ teaser_image:id }}" alt="{{ teaser_image:name }}" class="img postImg{{img_displ_prop:key}}"/>
			{{ preview }}
		</p>

		{{endif}}
	</span> <!-- /row --> 
	<h5 class="right"><a href="{{ url }}">{{ helper:lang line="blog:read_more_label" }}</a></h5>
	<br>
	<div class="post_meta">
		{{ if keywords }}
		<div class="keywords">
			{{ keywords }}

			<span class="label secondary radius"><a href="{{ url:site }}blog/tagged/{{ keyword }}">{{ keyword }}</a></span>
			{{ /keywords }}
		</div>
		{{ endif }}
	</div>

	<hr>
</div>
{{ /posts }}
{{ else }}

{{ helper:lang line="blog:currently_no_posts" }}

{{ endif }}
{{ pagination }}
