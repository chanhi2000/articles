import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as n,t as m,e as s,n as o,g as p,d as a,f as i,r as e,o as k}from"./app-BgNevrm5.js";const b={},h={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},y=n("nav",{class:"table-of-contents"},[n("ul")],-1),f=n("hr",null,null,-1),g=i("<p>In this section we&#39;re going to look at just one method, which should tell you immediately that this is a <em>complicated</em> method. This method is called <code>createEnemy()</code>, and is responsible for launching either a penguin or a bomb into the air for the player to swipe. That&#39;s it – that&#39;s all it does. And yet it&#39;s going to take quite a lot of code because it takes quite a lot of functionality in order to make the game complete:</p><ol><li>Should this enemy be a penguin or a bomb?</li><li>Where should be it created on the screen?</li><li>What direction should it be moving in?</li></ol><p>It should be obvious that 3) relies on 2) – if you create something on the left edge of the screen, having it move to the left would make the game impossible for players!</p><p>An additional complexity is that in the early stages of the game we sometimes want to force a bomb, and sometimes force a penguin, in order to build a smooth learning curve. For example, it wouldn&#39;t be fair to make the very first enemy a bomb, because the player would swipe it and lose immediately.</p><p>We&#39;re going to specify what kind of enemy we want using an enum. You&#39;ve used enums already (not least in project 2), but you&#39;ve never created one before. To make <code>createEnemy()</code> work, we need to declare a new enum that tracks what kind of enemy should be created: should we force a bomb always, should we force a bomb never, or use the default randomization?</p>",5),w=n("em",null,"above",-1),A=n("code",null,"GameScene.swift",-1),S=i(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">enum</span> <span class="token class-name">ForceBomb</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> never<span class="token punctuation">,</span> always<span class="token punctuation">,</span> random</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can now use those values in your code, for example like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">if</span> forceBomb <span class="token operator">==</span> <span class="token punctuation">.</span>never <span class="token punctuation">{</span></span>
<span class="line">    enemyType <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> forceBomb <span class="token operator">==</span> <span class="token punctuation">.</span>always <span class="token punctuation">{</span></span>
<span class="line">    enemyType <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK, it&#39;s time to start looking at the <code>createEnemy()</code> method. I say &quot;start&quot; because we&#39;re going to look at it in three passes: the code required to create bombs, the code to position enemies and set up their physics, and the code required to do everything else. Your code probably won&#39;t run until all three parts are in place, so don&#39;t worry!</p><p>We&#39;re going to need to track enemies that are currently active in the scene, so please add this array as a property of your class:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> activeEnemies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">SKSpriteNode</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>And now let&#39;s look at the core of the <code>createEnemy()</code> method. It needs to:</p><ol><li>Accept a parameter of whether we want to force a bomb, not force a bomb, or just be random.</li><li>Decide whether to create a bomb or a penguin (based on the parameter input) then create the correct thing.</li><li>Add the new enemy to the scene, and also to our <code>activeEnemies</code> array.</li></ol><p>That&#39;s it. Not too much, I hope. To decide whether to create a bomb or a player, I&#39;ll choose a random number from 0 to 6, and consider 0 to mean &quot;bomb&quot;. Here&#39;s the code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">createEnemy</span><span class="token punctuation">(</span>forceBomb<span class="token punctuation">:</span> <span class="token class-name">ForceBomb</span> <span class="token operator">=</span> <span class="token punctuation">.</span>random<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> enemy<span class="token punctuation">:</span> <span class="token class-name">SKSpriteNode</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> enemyType <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token operator">...</span><span class="token number">6</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> forceBomb <span class="token operator">==</span> <span class="token punctuation">.</span>never <span class="token punctuation">{</span></span>
<span class="line">        enemyType <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> forceBomb <span class="token operator">==</span> <span class="token punctuation">.</span>always <span class="token punctuation">{</span></span>
<span class="line">        enemyType <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> enemyType <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// bomb code goes here</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        enemy <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;penguin&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SKAction</span><span class="token punctuation">.</span><span class="token function">playSoundFileNamed</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;launch.caf&quot;</span></span><span class="token punctuation">,</span> waitForCompletion<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        enemy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;enemy&quot;</span></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// position code goes here</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">addChild</span><span class="token punctuation">(</span>enemy<span class="token punctuation">)</span></span>
<span class="line">    activeEnemies<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>enemy<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">Note</p><p>Xcode will show you a compiler error for now, but don’t worry – we’re going to fix it.</p></div><p>There&#39;s nothing complicated in there, but I <em>have</em> taken out two fairly meaty chunks of code. That <code>// position code goes here</code> comment masks a lot of missing functionality that really makes the game come alive, so we&#39;re going to fill that in now.</p><p>I&#39;m going to use numbered comments again so you can see exactly how this code matches up with what it should do. So, here is what that missing position code needs to do:</p><ol><li>Give the enemy a random position off the bottom edge of the screen.</li><li>Create a random angular velocity, which is how fast something should spin.</li><li>Create a random X velocity (how far to move horizontally) that takes into account the enemy&#39;s position.</li><li>Create a random Y velocity just to make things fly at different speeds.</li><li>Give all enemies a circular physics body where the <code>collisionBitMask</code> is set to 0 so they don&#39;t collide.</li></ol><p>The only thing that might catch you out in the actual code is my use of magic numbers, which is what programmers call seemingly random (but actually important) numbers appearing in code. Ideally you don&#39;t want these, because it&#39;s better to make them constants with names, but then how would I be able to give you any homework?</p><p>Turning those five points into code is easy enough – just replace the <code>// position code goes here</code> with this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token comment">// 1</span></span>
<span class="line"><span class="token keyword">let</span> randomPosition <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">64</span><span class="token operator">...</span><span class="token number">960</span><span class="token punctuation">)</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">)</span></span>
<span class="line">enemy<span class="token punctuation">.</span>position <span class="token operator">=</span> randomPosition</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2</span></span>
<span class="line"><span class="token keyword">let</span> randomAngularVelocity <span class="token operator">=</span> <span class="token class-name">CGFloat</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">3</span><span class="token operator">...</span><span class="token number">3</span> <span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> randomXVelocity<span class="token punctuation">:</span> <span class="token class-name">Int</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3</span></span>
<span class="line"><span class="token keyword">if</span> randomPosition<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> <span class="token number">256</span> <span class="token punctuation">{</span></span>
<span class="line">    randomXVelocity <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token operator">...</span><span class="token number">15</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> randomPosition<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> <span class="token number">512</span> <span class="token punctuation">{</span></span>
<span class="line">    randomXVelocity <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token operator">...</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> randomPosition<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> <span class="token number">768</span> <span class="token punctuation">{</span></span>
<span class="line">    randomXVelocity <span class="token operator">=</span> <span class="token operator">-</span><span class="token class-name">Int</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token operator">...</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    randomXVelocity <span class="token operator">=</span> <span class="token operator">-</span><span class="token class-name">Int</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token operator">...</span><span class="token number">15</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4</span></span>
<span class="line"><span class="token keyword">let</span> randomYVelocity <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">24</span><span class="token operator">...</span><span class="token number">32</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5</span></span>
<span class="line">enemy<span class="token punctuation">.</span>physicsBody <span class="token operator">=</span> <span class="token class-name">SKPhysicsBody</span><span class="token punctuation">(</span>circleOfRadius<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">)</span></span>
<span class="line">enemy<span class="token punctuation">.</span>physicsBody<span class="token operator">?</span><span class="token punctuation">.</span>velocity <span class="token operator">=</span> <span class="token class-name">CGVector</span><span class="token punctuation">(</span>dx<span class="token punctuation">:</span> randomXVelocity <span class="token operator">*</span> <span class="token number">40</span><span class="token punctuation">,</span> dy<span class="token punctuation">:</span> randomYVelocity <span class="token operator">*</span> <span class="token number">40</span><span class="token punctuation">)</span></span>
<span class="line">enemy<span class="token punctuation">.</span>physicsBody<span class="token operator">?</span><span class="token punctuation">.</span>angularVelocity <span class="token operator">=</span> randomAngularVelocity</span>
<span class="line">enemy<span class="token punctuation">.</span>physicsBody<span class="token operator">?</span><span class="token punctuation">.</span>collisionBitMask <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The last missing part of the <code>createEnemy()</code> method is about creating bombs, and I&#39;ve left it separate because it requires some thinking. A &quot;bomb&quot; node in our game is actually going to be made up of three parts: the bomb image, a bomb fuse particle emitter, and a container that puts the two together so we can move and spin them around together.</p><p>The reason we need to keep the bomb image and bomb fuse separate is because tapping on a bomb is a fatal move that causes the player to lose all their lives immediately. If the fuse particle emitter were inside the bomb image, then the user could accidentally tap a stray fuse particle and lose unfairly.</p><p>As a reminder, we&#39;re going to force the Z position of bombs to be 1, which is higher than the default value of 0. This is so that bombs always appear in front of penguins, because hours of play testing has made it clear to me that it&#39;s awful if you don&#39;t realize there&#39;s a bomb lurking behind something when you swipe it!</p><p>Creating a bomb also needs to play a fuse sound, but that has its own complexity. You&#39;ve already seen that <code>SKAction</code> has a very simple way to play sounds, but it&#39;s so simple that it&#39;s not useful here because we want to be able to stop the sound and <code>SKAction</code> sounds don&#39;t let you do that. It would be confusing for the fuse sound to be playing when no bombs are visible, so we need a better solution.</p><p>That solution is called <code>AVAudioPlayer</code>, and it&#39;s not a SpriteKit class – it&#39;s available to use in your UIKit apps too if you want. We&#39;re going to have an <code>AVAudioPlayer</code> property for our class that will store a sound just for bomb fuses so that we can stop it as needed.</p><p>Let&#39;s put numbers to the tasks this chunk of code needs to perform:</p><ol><li>Create a new <code>SKSpriteNode</code> that will hold the fuse and the bomb image as children, setting its Z position to be 1.</li><li>Create the bomb image, name it &quot;bomb&quot;, and add it to the container.</li><li>If the bomb fuse sound effect is playing, stop it and destroy it.</li><li>Create a new bomb fuse sound effect, then play it.</li><li>Create a particle emitter node, position it so that it&#39;s at the end of the bomb image&#39;s fuse, and add it to the container.</li></ol><p>That&#39;s all you need to know in order to continue. We need to start by importing the AVFoundation framework, so add this line now next to <code>import SpriteKit</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">AVFoundation</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You&#39;ll also need to declare the <code>bombSoundEffect</code> property, so put this just after the declaration of <code>isSwooshSoundActive</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> bombSoundEffect<span class="token punctuation">:</span> <span class="token class-name">AVAudioPlayer</span><span class="token operator">?</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now for the real work. Please replace the <code>// bomb code goes here</code> comment with this, watching out for my numbered comments to help you match code against meaning:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token comment">// 1</span></span>
<span class="line">enemy <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">enemy<span class="token punctuation">.</span>zPosition <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">enemy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;bombContainer&quot;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2</span></span>
<span class="line"><span class="token keyword">let</span> bombImage <span class="token operator">=</span> <span class="token class-name">SKSpriteNode</span><span class="token punctuation">(</span>imageNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;sliceBomb&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">bombImage<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;bomb&quot;</span></span></span>
<span class="line">enemy<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>bombImage<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3</span></span>
<span class="line"><span class="token keyword">if</span> bombSoundEffect <span class="token operator">!=</span> <span class="token nil constant">nil</span> <span class="token punctuation">{</span></span>
<span class="line">    bombSoundEffect<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    bombSoundEffect <span class="token operator">=</span> <span class="token nil constant">nil</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>forResource<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;sliceBombFuse&quot;</span></span><span class="token punctuation">,</span> withExtension<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;caf&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> sound <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span>  <span class="token class-name">AVAudioPlayer</span><span class="token punctuation">(</span>contentsOf<span class="token punctuation">:</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        bombSoundEffect <span class="token operator">=</span> sound</span>
<span class="line">        sound<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token keyword">let</span> emitter <span class="token operator">=</span> <span class="token class-name">SKEmitterNode</span><span class="token punctuation">(</span>fileNamed<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;sliceFuse&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    emitter<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">76</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">64</span><span class="token punctuation">)</span></span>
<span class="line">    enemy<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>emitter<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After all that work, you&#39;re almost done with bombs. But there&#39;s one small bug that we can either fix now or fix when you can see it, but we might as well fix it now because your brain is thinking about all that bomb code.</p><p>The bug is this: we&#39;re using <code>AVAudioPlayer</code> so that we can stop the bomb fuse when bombs are no longer on the screen. But where do we actually stop the sound? Well, we don&#39;t yet – but we need to.</p><p>To fix the bug, we need to modify the <code>update()</code> method, which is something we haven&#39;t touched before – in fact, so far we’ve just been deleting it! This method is called every frame before it&#39;s drawn, and gives you a chance to update your game state as you want. We&#39;re going to use this method to count the number of bomb containers that exist in our game, and stop the fuse sound if the answer is 0.</p><p>Change your <code>update()</code> method to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> currentTime<span class="token punctuation">:</span> <span class="token class-name">TimeInterval</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> bombCount <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> node <span class="token keyword">in</span> activeEnemies <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> node<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string-literal"><span class="token string">&quot;bombContainer&quot;</span></span> <span class="token punctuation">{</span></span>
<span class="line">            bombCount <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">break</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> bombCount <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// no bombs – stop the fuse sound!</span></span>
<span class="line">        bombSoundEffect<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        bombSoundEffect <span class="token operator">=</span> <span class="token nil constant">nil</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function V(l,x){const t=e("VPCard"),c=e("VidStack"),r=e("FontIcon");return k(),d("div",null,[n("h1",h,[n("a",v,[n("span",null,m(l.$frontmatter.title)+" 관련",1)])]),s(t,o(p({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),y,f,s(t,o(p({title:"Enemy or bomb: AVAudioPlayer | Hacking with iOS",desc:"Enemy or bomb: AVAudioPlayer",link:"https://hackingwithswift.com/read/23/4/enemy-or-bomb-avaudioplayer",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),s(c,{src:"youtube/4R6rbsWLRoM"}),g,n("p",null,[a("Add this "),w,a(" your class definition in "),s(r,{icon:"fa-brands fa-swift"}),A,a(":")]),S])}const q=u(b,[["render",V],["__file","04-enemy-or-bomb-avaudioplayer.html.vue"]]),P=JSON.parse('{"path":"/hackingwithswift.com/read/23/04-enemy-or-bomb-avaudioplayer.html","title":"Enemy or bomb: AVAudioPlayer","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Enemy or bomb: AVAudioPlayer","description":"Article(s) > Enemy or bomb: AVAudioPlayer","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Enemy or bomb: AVAudioPlayer"},{"property":"og:description","content":"Enemy or bomb: AVAudioPlayer"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/23/04-enemy-or-bomb-avaudioplayer.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/23/04-enemy-or-bomb-avaudioplayer.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Enemy or bomb: AVAudioPlayer"}],["meta",{"property":"og:description","content":"Article(s) > Enemy or bomb: AVAudioPlayer"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Enemy or bomb: AVAudioPlayer\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":6.11,"words":1833},"filePathRelative":"hackingwithswift.com/read/23/04-enemy-or-bomb-avaudioplayer.md","excerpt":"\\n"}');export{q as comp,P as data};
